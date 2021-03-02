/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import GoogleDrive from '@uppy/google-drive';
import XHRUpload from '@uppy/xhr-upload';
import DashboardModal from '@uppy/react/lib/DashboardModal';
import { Button } from 'semantic-ui-react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

export default class DragAndDropFileUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleModalClick = this.handleModalClick.bind(this);

    this.uppy = Uppy({ id: 'uppy1', autoProceed: true, debug: true })
      .use(Tus, { endpoint: '/api/v1/documents' })
      .use(GoogleDrive, { companionUrl: 'https://companion.uppy.io' })
      .use(XHRUpload, {
        endpoint: '/api/v1/policies',
        formData: true,
        fieldName: 'files[]',
      });
    // console.log(this.uppy);
  }

  componentWillUnmount() {
    this.uppy.close();
  }

  handleModalClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;

    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <div>
          <Button id="dashboardmodal" onClick={this.handleModalClick}>
            {open ? 'Close dashboard' : 'Upload Documents'}
          </Button>
          <DashboardModal
            uppy={this.uppy}
            open={open}
            target={document.body}
            onRequestClose={() => this.setState({ open: false })}
            plugins={['Webcam']}
            trigger="#dashboardmodal"
          />
        </div>
      </div>
    );
  }
}
