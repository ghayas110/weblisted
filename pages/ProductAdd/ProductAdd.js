import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from '../../pages/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../styles/ProductAdd.module.css'
import { TextareaAutosize } from '@mui/material';
import { Grid } from '@mui/material';

function ProductAdd() {
    return (
        <>
            <div className={styles.ProductAdd}>
                <Header />
            </div>
            <div className="container">
                <div className="row">
                    <h3 className={styles.productAddHeading}>Product Add</h3>
                    <div className="con-lg-12" id={styles.ProductAddForm} >
                        <div className="container">
                            <section className="panel panel-default">
                                <div className="panel-heading">
                                </div>
                                <div className="panel-body">
                                    <form action="designer-finish.html" className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="name" className="col-sm-3 control-label">Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Product Name " />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="name" className="col-sm-3 control-label">Price</label>
                                            <div className="col-sm-9">
                                                <input type="Number" className="form-control" name="name" id="name" placeholder="Product Price" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="about" className="col-sm-3 control-label">Description</label>
                                            <div className="col-sm-9">
                                                <textarea className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group" id={styles.productSizing}>
                                            <label for="qty" className="col-sm-3 control-label">Weight</label>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" name="qty" id="qty" placeholder="Weight_" />
                                            </div>
                                            <label for="qty" className="col-sm-3 control-label"> Width</label>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" name="qty" id="qty" placeholder="Width" />
                                            </div>
                                            <label for="qty" className="col-sm-3 control-label"> Height</label>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" name="qty" id="qty" placeholder="Height" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Duration</label>
                                            <div className="col-sm-3">
                                                <label className="control-label small" for="date_start">Date Start </label>
                                                <input type="text" className="form-control" name="date_start" id="date_start" placeholder="Date Start" />
                                            </div>
                                            <div className="col-sm-3">
                                                <label className="control-label small" for="date_finish">Date End</label>
                                                <input type="text" className="form-control" name="date_finish" id="date_finish" placeholder="Date End" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="name" className="col-sm-3 control-label">Image Upload</label>
                                            <div className="col-sm-3">
                                                <label className="control-label small" for="file_img">Format (jpg/png):</label> <input type="file" name="file_img" />
                                            </div>
                                            <div className="col-sm-3">
                                                <label className="control-label small" for="file_img">Image</label>  <input type="file" name="file_archive" />
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="form-group">
                                            <div className="col-sm-offset-3 col-sm-9">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
}

export default ProductAdd;