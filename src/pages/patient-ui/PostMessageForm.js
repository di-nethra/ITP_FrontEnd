import React from "react";
import CardContent from "@material-ui/core/CardContent";
import { Card } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState, useEffect } from "react";
import inquiryServices from "../../services/inquiry.Service";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import * as Yup from "yup";
import { Formik } from "formik";
import TextField from "../../components/patient-ui/Echannelling/TextFeild";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";

const INITIAL_FORM_STATE = {
  title: "",
  message: "",
};

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required("Please enter a heading for your inquiry"),
  message: Yup.string().required("Please enter your inquiry in the above box"),
});

function PostMessageForm() {
  useEffect(() => {
    getInqruiy();
  }, []);

  //demo for the inquiry

  const DemoInquiry = () => {
    setTitle("E-Chanell Cancel");
    setMessage(
      "I had made an chanelling thorugh the system. I want to cancel my chanelling"
    );
  };

  const [inquiries, setInquiries] = useState([]);

  //Search bar for search inquiries

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    if (event.target.value !== "") {
      console.log(query);
      setLoading(true);
      inquiryServices
        .search(event.target.value)
        .then((response) => {
          setInquiries(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    } else {
      getInqruiy();
    }
  };

  //read the inquiries and store them to coloumns
  const columns = [
    // { field: "id", headerName: "id", width: 0,  },
    { field: "title", headerName: "Title", width: 450 },
    {
      field: "message",
      headerName: "Message",
      width: 800,
      editable: false,
    },
  ];

  //read the inquires and store them to a table rows
  let rows = [];
  for (const inquiry of inquiries) {
    rows.push({
      id: inquiry._id,
      title: inquiry.title,
      message: inquiry.message,
    });
  }

  //read all the inquiries using getall method
  const getInqruiy = () => {
    inquiryServices
      .getAll()
      .then((response) => {
        setInquiries(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSubmit = (e) => {
    console.log("submitted");

    e.preventDefault();

    const data = {
      title: title,
      message: message,
    };

    //create a new inquiry
    inquiryServices
      .create(data)

      .then((response) => {
        // console.log("inside create" + response.data);
        // console.log("inside then" + response.data);
        toast.success("Sucesfully Submitted the inquiry", {
          className: "error-toast",
          draggable: true,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
        });
        window.location.reload();
      })
      .catch((e) => {
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
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
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
                required
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
                required
              />
              <div className="buttonAlignRight">
                <Button
                  style={{ backgroundColor: "#005792", borderRadius: "5px" }}
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                  className={classes.postBtn}
                  startIcon={<SendIcon />}
                >
                  Inquiry
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  color="secondary"
                  onClick={DemoInquiry}
                >
                  DEMO
                </Button>
                <ToastContainer />
              </div>
            </form>
          </Formik>
        </CardContent>
      </Card>
      <br />

      <div style={{ marginTop: 20 }}>
        <Card>
          <CardContent>
            <h3>Inquiries </h3>
            <br />
            <div style={{ height: 500, width: "100%" }}>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid item xl={4} lg={4}>
                  <FormControl variant="outlined" style={{ width: 500 }}>
                    <InputLabel htmlFor="search">Search Inquiry</InputLabel>
                    <OutlinedInput
                      id="search"
                      type="text"
                      value={query}
                      onChange={handleSearchChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility">
                            <SearchRounded />
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={180}
                    />
                    <FormHelperText id="search-helper-text">
                      Search Inquiry by title
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>

              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                autoHeight={true}
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
