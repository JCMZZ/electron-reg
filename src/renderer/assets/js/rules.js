/***** Element UI Form Rules *****/
/**
 * login
 */
export function loginRule() {
  return {
    email: [{
        required: true,
        message: "Please enter your email address！",
        trigger: "blur"
      },
      {
        type: 'email',
        message: "Please enter the correct email address！",
        trigger: "blur"
      }
    ],
    pwd: [{
        required: true,
        message: "Please enter your password！",
        trigger: "blur"
      },
      {
        min: 6,
        max: 16,
        message: "The length is between 6 and 16 characters！",
        trigger: "blur"
      }
    ]
  }
}
/**
 * register
 */
export function registerRule() {
  let passAgainValidator = (rule, value, callback) => {
    if (value !== this.registerData.pwd) {
      callback(new Error("The two passwords do not match！"));
    } else {
      callback();
    }
  };
  return {
    email: [{
        required: true,
        message: "Please enter your email address！",
        trigger: "blur"
      },
      {
        type: 'email',
        message: "Please enter the correct email address！",
        trigger: "blur"
      }
    ],
    pwd: [{
        required: true,
        message: "Please enter your password！",
        trigger: "blur"
      },
      {
        min: 6,
        max: 16,
        message: "The length is between 6 and 16 characters！",
        trigger: "blur"
      }
    ],
    pwdAgain: [{
        required: true,
        message: "Please enter your password again！",
        trigger: "blur"
      },
      {
        validator: passAgainValidator,
        trigger: "blur"
      }
    ]
  }
}