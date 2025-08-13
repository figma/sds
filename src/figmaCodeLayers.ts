import React from 'react';
import { SimpleButton } from "./ui/primitives/SimpleButton/SimpleButton";
import './index.css';

import type { FunctionComponent, ReactNode, ComponentType } from 'react'
import { Button } from 'react-aria-components';

type ColorValue = {
  r: number,
  g: number,
  b: number,
  a: number,
}

type ImageValue = {
  src: string,
  alt?: string,
  height?: number,
  width?: number,
}

type StringSetterPropKeys<Props> = keyof (Props & Record<keyof Props, (k: string) => void> )
type StringPropertySpec<Props> = {
  type: 'string',
  label?: string,
  defaultValue?: string,
  setter?: StringSetterPropKeys<Props>,
}

type StringOrNumberPropertySelectSpec<Spec, T extends string | number> = Spec & {
  control: 'select',
  options: {
    value: T,
    label: string,
  }[],
}

type BooleanSetterPropKeys<Props> = keyof (Props & Record<keyof Props, (k: boolean) => void> )
type BooleanPropertySpec<Props> = {
  type: 'boolean',
  label?: string,
  defaultValue?: boolean,
  setter?: BooleanSetterPropKeys<Props>,
}

type NumberSetterPropKeys<Props> = keyof (Props & Record<keyof Props, (k: number) => void> )
type NumberPropertySpec<Props> = {
  type: 'number',
  label?: string,
  defaultValue?: number,
  setter?: NumberSetterPropKeys<Props>,
}

type NumberPropertySliderSpec<Props> = NumberPropertySpec<Props> & {
  control: 'slider',
  min: number,
  max: number,
  step: number,
}

type NumberPropertyInputSpec<Props> = NumberPropertySpec<Props> & {
  control: 'input',
  unit?: string,
  min?: number,
  max?: number,
}

type ColorSetterPropKeys<Props> = keyof (Props & Record<keyof Props, (k: ColorValue) => void> )
type ColorPropertySpec<Props> = {
  type: 'color',
  label?: string,
  defaultValue?: ColorValue,
  setter?: ColorSetterPropKeys<Props>,
}

type ComponentReferencePropKeys<Props> = keyof (Props & Record<keyof Props, (k: string) => void> )
type ComponentReferencePropertySpec<Props> = {
  type: 'reference',
  label?: string,
  defaultValue?: React.FunctionComponent<any>,
  setter?: ComponentReferencePropKeys<Props>,
}

type ImagePropertySpec<Props> = {
  type: 'image',
  label?: string,
  defaultValue?: string | ImageValue,
}

type PropertySpec<Props> =
  | StringPropertySpec<Props>
  | BooleanPropertySpec<Props>
  | NumberPropertySpec<Props>
  | NumberPropertySliderSpec<Props>
  | NumberPropertyInputSpec<Props>
  | StringOrNumberPropertySelectSpec<NumberPropertySpec<Props>, number>
  | StringOrNumberPropertySelectSpec<StringPropertySpec<Props>, string>
  | ComponentReferencePropertySpec<Props>
  | ImagePropertySpec<Props>

type InferPropertySpec<T, K, Props> =
  T extends string ? StringPropertySpec<Props> :
  T extends number
    ? (Props[K] extends { control: 'slider' }
      ? NumberPropertySliderSpec<Props>
      : NumberPropertySpec<Props>) :
  T extends boolean ? BooleanPropertySpec<Props> :
  T extends ColorValue ? ColorPropertySpec<Props> :
  T extends FunctionComponent<any> ? ComponentReferencePropertySpec<Props> :
  T extends ImageValue ? ImagePropertySpec<Props> :
  PropertySpec<Props>

type PropertiesSpec<Props> = Partial<{
  [K in keyof Props]: InferPropertySpec<Props[K], K, Props>
}>

function defineProperties<Props>(component: React.FunctionComponent<Props>, spec: Partial<{
  [K in keyof Props]: PropertySpec<Props>
}>): void {
  Object.assign(component, {
      [Symbol.for('figma.react.props')]: spec,
  })
}

/**
 * Context wrapper type for providing context to components in Figma
 */
type ContextWrapper = ComponentType<{ children: ReactNode }>

/**
 * Configuration for figmaDefined HOC
 */
type FigmaDefinedConfig<Props> = {
  /** Figma property specifications */
  spec: Partial<{
    [K in keyof Props]: PropertySpec<Props>
  }>
  /** Optional context wrappers that the component needs to render correctly */
  contextWrappers?: ContextWrapper[]
}

/**
 * Higher-order component that applies Figma specifications and context wrappers to a React component
 * 
 * @param Component - The React component to enhance with Figma definitions
 * @param config - Configuration containing spec and optional context wrappers
 * @returns The enhanced component with Figma properties defined and context wrappers applied
 * 
 * @example
 * ```tsx
 * import { AuthProvider, PricingProvider } from 'data/providers'
 * 
 * const EnhancedButton = figmaDefined(Button, {
 *   spec: {
 *     size: {
 *       type: 'string',
 *       control: 'select',
 *       options: [
 *         { value: 'small', label: 'Small' },
 *         { value: 'medium', label: 'Medium' },
 *       ],
 *       defaultValue: 'medium'
 *     },
 *     variant: {
 *       type: 'string',
 *       control: 'select', 
 *       options: [
 *         { value: 'primary', label: 'Primary' },
 *         { value: 'neutral', label: 'Neutral' },
 *       ],
 *       defaultValue: 'primary'
 *     }
 *   },
 *   contextWrappers: [AuthProvider, PricingProvider]
 * })
 * ```
 */
function figmaDefined<Props>(
  Component: FunctionComponent<Props>,
  config: FigmaDefinedConfig<Props>
): FunctionComponent<Props> {
  const { spec, contextWrappers = [] } = config

  // Apply Figma property specifications
  defineProperties(Component, spec)

  // If no context wrappers are provided, return the component as-is
  if (contextWrappers.length === 0) {
    return Component
  }

  // Create a wrapped component with all context providers
  const WrappedComponent: FunctionComponent<Props> = (props) => {
    // Build nested context providers from innermost to outermost
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: React.ReactElement = React.createElement(Component as any, props as any)
    
    for (let i = contextWrappers.length - 1; i >= 0; i--) {
      const ContextProvider = contextWrappers[i]
      result = React.createElement(ContextProvider, { children: result })
    }

    return result
  }

  // Copy over the Figma specifications to the wrapped component
  Object.assign(WrappedComponent, {
    [Symbol.for('figma.react.props')]: spec,
  })

  // Preserve component name for debugging
  WrappedComponent.displayName = `figmaDefined(${Component.displayName || Component.name})`

  return WrappedComponent
}

const SimpleButtonWithFigmaSpec = figmaDefined(SimpleButton, {
  spec: {
    size: {
      type: 'string',
      defaultValue: 'medium',
      control: 'select',
      options: [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
      ],
    },
    text: {
      type: 'string',
      defaultValue: 'Click me',
    },
  },
})

export default SimpleButtonWithFigmaSpec
