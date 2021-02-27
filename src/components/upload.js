import React, { Component } from "react";
import { withApollo } from "react-apollo";
import axios from "axios";
import gql from "graphql-tag";

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  async handleUpload(e) {
    e.preventDefault();

    const form_data = new FormData();

    form_data.append("files", this.state.file);

    const response = await axios.post(
      "localhost:3010/storage/upload",
      form_data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-path": "/upload-folder/",
        },
        withCredentials: true,
      }
    );
    console.log({ response });

    const inserted_file = response.data[0]
  }
}
