import React from 'react'
import classnames from 'classnames'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import moment from 'moment'
// import DateTimeField from 'react-bootstrap-datetimepicker'

export const TextInput = props => {
  return (
    <FormGroup
      controlId={props.input.name}
      className={classnames({
        'has-error': props.meta.touched && props.meta.error,
        'form-inline': props.formInline
      })}
      bsSize={props.bsSize}
    >
      {props.label &&
        <ControlLabel>
          {props.label}
        </ControlLabel>}
      <FormControl
        {...props.input}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.meta.touched &&
        (props.meta.error &&
          <HelpBlock>
            {props.meta.error}
          </HelpBlock>)}
    </FormGroup>
  )
}

export class DatePicker extends React.Component {
  constructor(props) {
    super(props)
    const format = 'YYYY-MM-DD'
    this.state = {
      date: moment().format(format),
      format: format,
      inputFormat: format,
      mode: 'date'
    }
  }

  handleChange = newDate => {
    return this.setState({date: newDate})
  }

  render() {
    const {date, format, mode, inputFormat} = this.state
    const {input, label} = this.props
    const {touched, error} = this.props.meta
    return (
      <FormGroup
        controlId={input.name}
        className={classnames({
          'has-error': touched && error,
          'form-inline': input.formInline
        })}
      >
        {label &&
          <ControlLabel>
            {label}
          </ControlLabel>}
        <DateTimeField
          dateTime={date}
          format={format}
          viewMode={mode}
          defaultText=""
          inputFormat={inputFormat}
          onChange={input.onChange.bind(this)}
        />
        {touched &&
          (error &&
            <HelpBlock>
              {error}
            </HelpBlock>)}
      </FormGroup>
    )
  }
}

export const Dropdown = props => {
  return (
    <div>
      <FormGroup
        controlId={props.input.name}
        className={classnames({
          'has-error': props.meta.touched && props.meta.error,
          'form-inline': props.formInline
        })}
        bsSize={props.bsSize}
      >
        {props.label &&
          <ControlLabel>
            {props.label}
          </ControlLabel>}
        <FormControl
          componentClass="select"
          placeholder="select"
          {...props.input}
          value={props.selectedValue}
        >
          {props.options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            )
          })}
        </FormControl>
        {props.meta.touched &&
          (props.meta.error &&
            <HelpBlock>
              {props.meta.error}
            </HelpBlock>)}
      </FormGroup>
    </div>
  )
}
