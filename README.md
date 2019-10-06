### Cloud Panda Components
  #### Description: 
    React Reusable Components.

first, install cloud panda components using node package manager(npm) #### > npm i cloud-panda-components

### Validations
| Validation        |                      Description                                 |
| ----------------- | ---------------------------------------------------------------- |
| required          | Validates that the value must not be empty.                      |
| maxLength         | It is used to validate the maximum characters of the fields      |
| minLength         | It is used to validate the minimum characters of the fields      |
| isEmail           | Validates that a value is a valid email address.                 |
| isNumeric         | Validates that the value is only a number.                       |
| alpha             | Alphabet only validation .                                       |
| alphaNum          | Validates alpha numeric string value.                            |
| sameWith          | The given field must match the value you passed under validation |
| isArray           | The value must be a valid array                                  |
| file{maxSize}     | Validates the maximum filesize of the given file                 |
| file{extension}   | Validates the allowed file types of the given file               |
| custom            | Custom validation that uses regular expression/pattern           |

## How to use Validations!
  
## Example Code:

#### required
<Input 
    validations={
        {
            required: true
        }
    }
/>
-- Required

#### maxLength
 <Input 
    validations={
        {
            maxLength: 
            {
                value: 10
            }
        }
    }
/>
-- Limit the maximum length of the input fields

#### minLength
 <Input 
    validations={
        {
            minLength: 
            { 
                value: 6
            }
        }
    } 
/>
-- Minimum character length

#### isEmail
 <Input 
    validations={
        {
            isEmail: true
        }
    } 
 />

#### isNumeric
 <Input 
    validations={
        {
            isNumeric: 
            { 
                value: 10 
            }
        }
    }
/>
 -- Valid numbers only

 #### isNumeric
 <Input 
    validations={
        {
            alpha: true
        }
    }
/>
 -- Alphabet only
 
#### sameWith 
 <Input 
    validations={
        {
            sameWith: { value: 'Pass123' }
        }
    }
/>

 #### alphaNum 
 <Input 
    validations={
        {
            alphaNum: true
        }
    } 
/>
-- For Alpha Numeric Validations

#### isArray 
 <Input 
    validations={
        {
            sameWith: {isArray: ['Mangos', 'Apple'] }
        }
    }
/>
 -- Valid array value only.

#### file{maxSize} 
 <Input 
    validations={
        {
            file: { maxSize: 2000 }
        }
    }
/>
 -- Validate maximum size of file.
 
 #### file{Extension} 
 <Input 
    validations={
        {
            file: 
            { 
                ext: 'docx|png|jpg|jpeg' 
            }
        }
    } 
/>
 -- Validate allowed extensions for file.

#### custom
 <Input validations={
     {
         custom: 
            { 
                rules: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
            }
        }
    } 
/>
-- You can set your own validations with the use of regular expression

### You can customize your own error message for each validations.

### Example Code with custom error message

 <Input 
    validations={
        {
            required: {message: 'This fields is empty'}
        }
    } 
 />
 <Input 
    validations={
        {
            maxLength: { value: 10, message: 'Maximum Length exceeded' }
        }
    } 
 />

 #### Multiple validations
 <Input 
    validations={
        {
            required: {message: "This is a required field."},
            isNumeric: {message: 'A valid number value is required.'}
        }
    } 
 />

#### Note: Each validations has its own default error message, so it's okay to not set it if you want.

### Props
|       Props      |                          Description                                     |
| ---------------- | ------------------------------------------------------------------------ |
| label            | Text of label, default: "No Label"                                       |
| containerClass   | It refers to the container of input and label, default: "form-group"     |
| inputProps       | refering to the props of input e.g(placeholder, type)                    |
| labelProps       | It refers to the properties of label e.g(for, className)                 |
| validations      | Object property that contains the validations                            |
| onChange         | It returns your function on onChange event of the input                  |
| validate         | When set to false, the input will not validate. default: true            |






