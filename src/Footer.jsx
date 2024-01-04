import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiFlipboard } from "react-icons/si";

const Footer = () => {
    return (
        <>

            <footer >

                <div class="container p-4">
                    <hr></hr>
                    <div class="row">

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-footer">AppFind</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-body">How it works</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-body">FAQ</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-body">Resources</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-body">Blog</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

                            <h5 class="text-uppercase"></h5>
                            <br></br>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!" class="text-body">Software Application</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-body">About Us</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-body">Contact </a>
                                </li>
                                <li>
                                    <a href="#!" class="text-body">Careers</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-footer">Follow Us</h5>
                            <div className="icon">
                            <FaFacebookF />
                            <SiFlipboard />
                            <IoLogoInstagram />
                            <FaLinkedinIn />
                            <BsTwitterX />
                            
                            </div>
                        </div>

                    </div>

                </div>

                <div class="text-center p-3">
                    <p>  © 2020 Copyright:
                        <a class="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a></p>
                </div>
            </footer>

        </>

    );
}

export default Footer;