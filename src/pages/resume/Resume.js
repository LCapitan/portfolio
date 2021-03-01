import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

class Resume extends Component {
    render() {
        return (
            <div className="PageContent NoImg">
                <div className="MainContent">
                    <h1>experience</h1>
                    <div className="TwoCol CareerContainer">
                        <div className="CareerCard">
                            <h3>Front End Developer</h3>
                            <h4>Primacy</h4>
                            <span>July 2016 - Present</span>
                            <ul>
                                <li>Requirements</li>
                                <li>Build components and web templates according to wireframes and designs</li>
                                <li>Build responsive emails and web ad banners</li>
                                <li>Maintain company portfolio and build case studies and other internal marketing efforts</li>
                            </ul>
                        </div>

                        <div className="CareerCard">
                            <h3>Creative Specialist</h3>
                            <h4>Freelance</h4>
                            <span>Dec 2016 - Present</span>
                            <ul>
                                <li>Requirements</li>
                                <li>Design and edit marketing and/or branding material for clients</li>
                                <li>Conceptualize layouts and designs for clients’ websites and brands</li>
                                <li>Photograph and edit images for families, groups, and individuals</li>
                                <li>Record and edit video productions according to clients’ needs</li>
                                <li>Furthering education on new technologies and design trends</li>
                            </ul>
                        </div>

                        <div className="CareerCard">
                            <h3>Graphic Designer</h3>
                            <h4>Travelers</h4>
                            <span>April 2014 – Dec 2016</span>
                            <ul>
                                <li>Requirements</li>
                                <li>Design and edit enterprise marketing materials</li>
                                <li>Work collaboratively with team on ideation/conceptualization</li>
                                <li>Photograph and edit photos for company leadership and collateral</li>
                                <li>Storyboard, record, and edit company video productions</li>
                                <li>Administrator for digital asset management system</li>
                            </ul>
                        </div>

                        <div className="CareerCard">
                            <h3>Graphic Designer</h3>
                            <h4>Turning Hearts</h4>
                            <span>Sept 2009 – April 2015</span>
                            <ul>
                                <li>Requirements</li>
                                <li>Conceptualize, design and implement identity for the church/ministry</li>
                                <li>Design websites for the church and the ministry</li>
                                <li>Manage social media platforms and create social media posts</li>
                                <li>Record, edit and produce ministry educational videos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;