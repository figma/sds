import clsx from "clsx";
import { Description, Field, Label } from "primitives";
import {
  Slider as RACSlider,
  SliderOutput as RACSliderOutput,
  SliderThumb as RACSliderThumb,
  SliderTrack as RACSliderTrack,
  type SliderOutputProps as RACSliderOutputProps,
  type SliderProps as RACSliderProps,
  type SliderThumbProps as RACSliderThumbProps,
  type SliderTrackProps as RACSliderTrackProps,
} from "react-aria-components";
import "./slider.css";

export type SliderFieldProps = SliderProps & {
  name?: string;
  label?: string;
  description?: string;
  thumbLabels?: string[];
  showOutput?: boolean;
};
export function SliderField({
  name,
  label,
  description,
  showOutput,
  thumbLabels,
  ...props
}: SliderFieldProps) {
  return (
    <Slider {...props}>
      <Field>
        {label && <Label>{label}</Label>}
        {showOutput && (
          <SliderOutput>
            {({ state }) =>
              state.values
                .map((_, i) => state.getThumbValueLabel(i))
                .join(" - ")
            }
          </SliderOutput>
        )}
        <SliderTrack>
          {({ state }) =>
            state.values.map((_, i) => (
              <SliderThumb
                name={
                  state.values.length > 1
                    ? `${name}-${thumbLabels?.[i] || i}`
                    : name
                }
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
              />
            ))
          }
        </SliderTrack>
        {description && <Description>{description}</Description>}
      </Field>
    </Slider>
  );
}

/* TODO: only supporting horizontal right now */
export type SliderProps = Omit<RACSliderProps, "orientation">;
export function Slider({ className, ...props }: SliderProps) {
  const classNames = clsx(className, "slider-field");
  return <RACSlider className={classNames} {...props} />;
}

export type SliderOutputProps = RACSliderOutputProps;
export function SliderOutput({ className, ...props }: SliderOutputProps) {
  const classNames = clsx(className, "slider-output");
  return <RACSliderOutput className={classNames} {...props} />;
}

export type SliderThumbProps = RACSliderThumbProps;
export function SliderThumb({ className, ...props }: SliderThumbProps) {
  const classNames = clsx(className, "slider-thumb");
  return <RACSliderThumb className={classNames} {...props} />;
}

export type SliderTrackProps = RACSliderTrackProps;
export function SliderTrack({ className, ...props }: SliderTrackProps) {
  const classNames = clsx(className, "slider");
  return <RACSliderTrack className={classNames} {...props} />;
}
