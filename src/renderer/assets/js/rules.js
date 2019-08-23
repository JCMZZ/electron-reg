/***** Element UI Form Rules *****/
/**
 * login
 */
export function loginRule() {
  return {
    account: [{
        required: true,
        message: "Please enter your account",
        trigger: "blur"
      },
      {
        min: 5,
        max: 40,
        message: "The length is between 5 and 40 characters",
        trigger: "blur"
      }
    ],
    pwd: [{
        required: true,
        message: "Please enter your password",
        trigger: "blur"
      },
      {
        min: 8,
        max: 16,
        message: "The length is between 8 and 16 characters",
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
    if (value !== this.loginData.pwd) {
      callback(new Error("The two passwords do not match"));
    } else {
      callback();
    }
  };
  return {
    account: [{
        required: true,
        message: "Please enter your account",
        trigger: "blur"
      },
      {
        min: 5,
        max: 40,
        message: "The length is between 5 and 40 characters",
        trigger: "blur"
      }
    ],
    pwd: [{
        required: true,
        message: "Please enter your password",
        trigger: "blur"
      },
      {
        min: 8,
        max: 16,
        message: "The length is between 8 and 16 characters",
        trigger: "blur"
      }
    ],
    pwdAgain: [{
        required: true,
        message: "Please enter your password again",
        trigger: "blur"
      },
      {
        validator: passAgainValidator,
        trigger: "blur"
      }
    ]
  }
}