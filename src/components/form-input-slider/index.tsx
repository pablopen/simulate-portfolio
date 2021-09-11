import React, { useEffect } from 'react'
import { Slider } from '@material-ui/core'
import { Controller, Control, UseFormSetValue } from 'react-hook-form'

// We cannot use Slider directly with react-hook-forms so... we need to wrapp it under a Controller
const FormInputSlider: React.FC<{
  name: string
  control: Control<any, object>
  setValue: UseFormSetValue<any>
}> = ({ name, control, setValue, ...props }) => {
  const [sliderValue, setSliderValue] = React.useState(0)

  useEffect(() => {
    setValue(name, sliderValue)
  }, [name, setValue, sliderValue])

  const handleChange = (event: any, newValue: number | number[]) => {
    setSliderValue(newValue as number)
  }

  // Init slider with labels at 0, 5 and 10, but with marks at all points
  const sliderMarks = Array.from(Array(11).keys()).map((val) => {
    return {
      value: val,
      ...([0, 5, 10].includes(val) && { label: val }),
    }
  })

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Slider
          value={sliderValue}
          onChange={handleChange}
          {...props}
          valueLabelDisplay="auto"
          min={0}
          max={10}
          step={1}
          marks={sliderMarks}
        />
      )}
    />
  )
}
export default FormInputSlider
