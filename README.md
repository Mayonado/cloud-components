### Cloud Panda Components
  #### Description: 
    It is a reusable react components that performs some functionalities.

first, install cloud panda components using node package manager(npm) #### > npm i cloud-panda-components

### Validations
| Validation |                      Description                            |
| ---------- | ----------------------------------------------------------- |
| required   | Used to validate empty fields                               |
| maxLength  | It is used to validate the maximum characters of the fields |
| minLength  | It is used to validate the minimum characters of the fields |
| isEmail    | It used to check if the email is valid                      |
| isNumeric  | Used to check if the value is numeric                       |
| custom     | Custom validation that uses regular expression/pattern      |

You will passed validations as props on cloud-panda-components

## How to use Validations!
  
## Example Code:

#### required
<Input validations={{required: true}} />

#### maxLength
 <Input validations={{maxLength: { value: 10 }}} />
-- The value 10 is for character limit of input value

#### minLength
 <Input validations={{minLength: { value: 6 }}} />
-- The value 6 is for character minimum character of input value

#### isEmail
 <Input validations={{isEmail: true}} />

#### isNumeric
 <Input validations={{isNumeric: { value: 10 }}} />

#### custom
 <Input validations={{custom: { rules: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ }}} />
-- You can set your own validations with the use of regular expression

### Note: You can customize your own error message for each validations.

### Example Code with custom error message

 <Input validations={{required: {message: 'This fields is empty'}}} />
 <Input validations={{maxLength: { value: 10, message: 'Maximum Length exceeded' }}} />
 <Input validations={{minLenght: { value: 10, message: 'The value must more 10 characters' }}} />

#### Another Note: Each validations has its own default error message, so it's okay to not set it if you want.

### Props
|       Props      |                          Description                                     |
| ---------------- | ------------------------------------------------------------------------ |
| label            | Text of label, default: "No Label"                                       |
| containerClass   | It refers to the container of input and label, default: "form-group"     |
| inputProps       | refering to the props of input e.g(placeholder, type)                    |
| labelProps       | It refers to the properties of label e.g(for, className)                 |
| validations      | Object property that contains the validations                            |
| onChange         | It returns your function on onChange event of the input                  |
| formValid        | When set to false, the input will not validated. default: true           |






