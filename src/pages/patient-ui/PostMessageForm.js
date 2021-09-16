import React from "react";
import CardContent from "@material-ui/core/CardContent";
import { Card } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState, useEffect } from "react";
import inquiryServices from "../../services/inquiry.Service";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import inquriyServices from "../../services/inquiry.Service";
import { DeleteOutline } from "@material-ui/icons";
import Swal from "sweetalert2";
import {useTheme} from "@material-ui/core";
import * as Yup from 'yup';
import { Formik } from 'formik';
import TextField from "../../components/patient-ui/Echannelling/TextFeild";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const INITIAL_FORM_STATE= {
  title: "",
  message: "",
};
const FORM_VALIDATION = Yup.object().shape({

  title: Yup.string()
    .required('Please enter a heading for your inquiry'),
   message: Yup.string()
    .required('Please enter your inquiry in the above box'),
});

// const styles = {
//   button: {
//     margin: 20,
//     left: 415,
//   },

//   label: {
//     margin: 30,
//   },

//   formControl: {
//     minWidth: 200,
//   },
//   postBtn: {
//     width: "18%",
//     height: "20%",
//   },
//   Card: {
//     marginTop: "1000px",
//   },
// };

function PostMessageForm() {

  useEffect(() => {
    getInqruiy();
  }, []);

  const [inquiries, setInquiries] = useState([]);

  const columns = [
    // { field: "id", headerName: "id", width: 0,  },
    { field: "title", headerName: "Title", width: 500 },
    {
      field: "message",
      headerName: "Message",
      width: 700,
      editable: false,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      sortable: false,
      editable: false,
      renderCell: (params) => {
        return (
          <>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              value={params.row.id}
              onClick={deleteInquiry}
              style= {{width:"50%" }}
            >
              <DeleteOutline />
            </Button>
          </>
        );
      },
    },
  ];

  let rows = [];
  for (const inquiry of inquiries) {
    rows.push({
      id: inquiry._id,
      title: inquiry.title,
      message: inquiry.message,
    });
  }

  const getInqruiy = () => {
    inquiryServices
      .getAll()
      .then((response) => {
        setInquiries(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


   const theme = useTheme();

  const deleteInquiry = (event) => {
    let id = event.currentTarget.value;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: theme.palette.secondary.main,
      cancelButtonColor: theme.palette.primary.main,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        inquriyServices.remove(id)
          .then(() => {
            Swal.fire("Deleted!", "Your session has been deleted.", "success");
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const handleSubmit = (e) => {
    console.log("submitted");

    e.preventDefault();

    const data = {
      Title: title,
      Message: message,
    };

    inquiryServices
      .create(data)

      .then((response) => {
        // alert("success");
        console.log("inside create" + response.data);
        console.log("inside then" + response.data);
        toast.success("Sucesfully Submitted the inquiry",{
          className:"error-toast",
          draggable:true,
          position:toast.POSITION.TOP_RIGHT,
          autoClose:false,
        });
        window.location.reload();
      })
      .catch((e) => {
        // alert(e );
        console.log("this is the error:" + e);
      });
  };

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handletitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlmessageChange = (event) => {
    setMessage(event.target.value);
  };
  const classes = useStyles();

  return (
    <div style={{ margin: 100 }}>
      <Card>
        <CardContent>
          <h3>Inquiry</h3>
          <h4>Make your Inquiry using the below form</h4>
          <br />
          <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              
            >

          <form
            autoComplete="off"
            
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <TextField
              name="title"
              variant="outlined"
              label="Inquiry Heading"
              value={title}
              onChange={handletitleChange}
              style={{ margin: 10 }}
              fullWidth
              
              
            />
            <br></br>
            <TextField
              name="message"
              variant="outlined"
              label="Briefly type your inquiry here"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={handlmessageChange}
              style={{ margin: 10 }}
              
            />
            <Button
              style={{ backgroundColor: "#005792", borderRadius: "10px" }}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              className={classes.postBtn}
              startIcon={<SendIcon />}
              
            >
              Inquiry
            </Button>
            <ToastContainer />
          </form>
          </Formik>
        </CardContent>
      </Card>

      <div style={{ marginTop: 20 }}>
        <Card >
          <CardContent >
            <h3>Inquiries </h3>
            <br />
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                style={{ backgroundColor: "white" }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default PostMessageForm;

// import React from "react";
// import { Container, InputLabel } from "@material-ui/core";
// import { MuiThemeProvider } from "@material-ui/core";
// import { Typography } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
// import CardContent from "@material-ui/core/CardContent";
// import { Card } from "@material-ui/core";
// import SendIcon from "@material-ui/icons/Send";
// import AutorenewIcon from "@material-ui/icons/Autorenew";
// import Controls from "../../components/patient-ui/Echannelling/Controls";
// import {
//   Form,UserForm
// } from "../../components/patient-ui/Echannelling/useForm";
// import { useState } from "react";
// import MenuItem from "@material-ui/core/MenuItem";
// import { Select } from "@material-ui/core";
// import inquiryServices from "../../services/inquiry.Service";
// import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";

// const initialFieldValues = {
//     title: '',
//     message: ''
// }

// const styles = {
//     button: {
//       margin: 20,
//       left: 415,
//     },

//     label: {
//       margin: 30,
//     },

//     formControl: {
//       minWidth: 200,
//     },
//     postBtn: {
//       width: "18%",
//       height:"20%"
//   },
//     Card: {
//     marginTop:"1000px"
// },

//   };

// function PostMessageForm() {
//   const handleSubmit = (e) => {
//     console.log("submitted");

//     e.preventDefault();

//     const data = {
//     Title : title,
//     Message: message,
//     };

//     inquiryServices
//       .create(data)

//       .then((response) => {
//         alert("success");
//         console.log("inside create" + response.data);
//         console.log("inside then" + response.data);
//       })
//       .catch((e) => {
//         // alert(e );
//         console.log("this is the error:" + e);
//       });

//   };

//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");

//   const handletitleChange = (event) => {
//     setTitle(event.target.value);
//   };
//   const handlmessageChange = (event) => {
//     setMessage(event.target.value);
//   };
//   const classes = useStyles();

//   return (
//     <Card style={{ margin: 300 ,width:1000}}>
//     <CardContent>

//     <h3>Inquiry</h3>
//         <h4>Make your Inquiry using the below form</h4>
//         <br/>

//     <Grid Container direction="row" justifyContent="space-between">
//     <Grid item xs={12}>

//     <form autoComplete="off"
//             onSubmit={handleSubmit}>
//             <Controls.Input
//                 name="title"
//                 variant="outlined"
//                 label="Inquiry Heading"
//                 value={title}
//                 onChange={handletitleChange}

//             />
//             <br/>
//             <br></br>
//                     <br></br>
//             <Controls.Input
//                 name="message"
//                 variant="outlined"
//                 label="Briefly type your inquiry here"
//                 fullWidth
//                 multiline
//                 rows={4}
//                 value={message}
//                 onChange={handlmessageChange}

//             />
//             <Controls.Button style={{backgroundColor:"#005792",borderRadius:"10px"}}
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 type="submit"
//                 // styles= {styles.postBtn}
//                 startIcon={<SendIcon/>}
//                 onClick={handleSubmit}

//             >Inquiry</Controls.Button>
//         </form>

//     </Grid>

//     </Grid>

//         </CardContent>
//     </Card>
//   );
// }

// export default PostMessageForm;

// import React, { useEffect, useState } from "react";
// import { TextField, withStyles, Button } from "@material-ui/core";
// import useForm from "./useForm";
// import { connect } from "react-redux";
// import * as actions from "../actions/postMessage";
// import ButterToast, { Cinnamon } from "butter-toast";
// import { AssignmentTurnedIn } from "@material-ui/icons";
// import SendIcon from '@material-ui/icons/Send';

// const initialFieldValues = {
//     title: '',
//     message: ''
// }

// const styles = theme => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1)
//         },
//     },
//     form: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center'
//     },
//     postBtn: {
//         width: "18%",
//         height:"20%"
//     }
// })

// const PostMessageForm = ({ classes, ...props }) => {

//     useEffect(() => {
//         if (props.currentId !== 0){
//             setValues({
//                 ...props.postMessageList.find(x => x._id === props.currentId)
//             })
//             setErrors({})
//         }
//     }, [props.currentId])

//     const validate = () => {
//         let temp = { ...errors }
//         temp.title = values.title ? "" : "This field is required."
//         temp.message = values.message ? "" : "This field is required."
//         setErrors({
//             ...temp
//         })
//         return Object.values(temp).every(x => x === "")
//     }

//     var {
//         values,
//         setValues,
//         errors,
//         setErrors,
//         handleInputChange,
//         resetForm
//     } = useForm(initialFieldValues,props.setCurrentId)

//     const handleSubmit = e => {
//         e.preventDefault()
//         const onSuccess = () => {
//             ButterToast.raise({
//                 content: <Cinnamon.Crisp title="Inquiry"
//                     content="Your inquiry has successfully submitted"
//                     scheme={Cinnamon.Crisp.SCHEME_PURPLE}
//                     icon={<AssignmentTurnedIn />}
//                 />
//             })
//             resetForm()
//         }
//         if (validate()) {
//             if (props.currentId === 0)
//                 props.createPostMessage(values, onSuccess)
//             else
//                 props.updatePostMessage(props.currentId, values, onSuccess)
//         }
//     }

//     return (
//         <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}
//             onSubmit={handleSubmit}>
//             <TextField
//                 name="title"
//                 variant="outlined"
//                 label="Inquiry Heading"
//                 fullWidth
//                 value={values.title}
//                 onChange={handleInputChange}
//                 {...(errors.title && { error: true, helperText: errors.title })}
//             />
//             <TextField
//                 name="message"
//                 variant="outlined"
//                 label="Briefly type your inquiry here"
//                 fullWidth
//                 multiline
//                 rows={4}
//                 value={values.message}
//                 onChange={handleInputChange}
//                 {...(errors.message && { error: true, helperText: errors.message })}
//             />
//             <Button style={{backgroundColor:"#005792",borderRadius:"10px"}}
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 type="submit"
//                 className={classes.postBtn}
//                 startIcon={<SendIcon/>}

//             >Inquiry</Button>
//         </form>
//     );
// }

// const mapStateToProps = state => ({
//     postMessageList: state.postMessage.list
// })

// const mapActionToProps = {
//     createPostMessage: actions.create,
//     updatePostMessage: actions.update
// }

// export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostMessageForm));
