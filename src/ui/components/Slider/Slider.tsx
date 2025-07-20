import { Description, Field, Label } from "components";
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
import css from "./Slider.module.css";

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

/* TODO: only supports horizontal right now */
export type SliderProps = Omit<RACSliderProps, "orientation">;
export function Slider({ ...props }: SliderProps) {
  return <RACSlider className={css.field} {...props} />;
}

export type SliderOutputProps = RACSliderOutputProps;
export function SliderOutput({ ...props }: SliderOutputProps) {
  return <RACSliderOutput className={css.output} {...props} />;
}

export type SliderThumbProps = RACSliderThumbProps;
export function SliderThumb({ ...props }: SliderThumbProps) {
  return <RACSliderThumb className={css.thumb} {...props} />;
}

export type SliderTrackProps = RACSliderTrackProps;
export function SliderTrack({ ...props }: SliderTrackProps) {
  return <RACSliderTrack className={css.track} {...props} />;
}
