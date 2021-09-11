import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from '@material-ui/core/'
import FormInputSlider from 'components/form-input-slider'
import useStyles from './styles'

type Inputs = {
  name: string
  income: Number
  risk: Number
}

const Questionnaire = () => {
  const classes = useStyles()
  const {
    register,
    handleSubmit,
    //formState: { errors }, We can use errors to display helper text IE errors.name or errors.income
    control,
    setValue,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <Container className={classes.container} maxWidth="xs">
      <Typography variant="h6" gutterBottom>
        Fill the form to start - (simulation to be implemented)
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography gutterBottom>What’s your name?</Typography>
                <TextField
                  fullWidth
                  label="Name"
                  size="small"
                  variant="outlined"
                  {...register('name', { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>
                  How much do you earn per month?
                </Typography>

                <TextField
                  fullWidth
                  label="Monthly Income"
                  size="small"
                  variant="outlined"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  {...register('income', { required: true })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography id="risk-slider" gutterBottom>
                  What is your risk tolerance level?
                </Typography>
                <FormInputSlider
                  name="risk"
                  control={control}
                  setValue={setValue}
                  aria-labelledby="risk-slider"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Questionnaire
