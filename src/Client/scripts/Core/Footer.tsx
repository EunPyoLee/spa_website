import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import Constants from '../Constants';

import {ReactComponent as IconBrandLinkedin} from '../../Logos/Brand/linkedin.svg';

const Footer: React.FC<{}> = () => {
    const {links:{linkedIn}, email} = Constants;

    return(
        <div className="footer">
            <div className="footer-col left">
                <p><span className="footer-title">CONTACT</span></p>
                <p className="footer-content-row">
                    <span className="footer-content">{email}</span>
                </p>
            </div>
            <div className="footer-col right">
                <p><span className="copyright">© Copyright {(new Date().getFullYear())} Jason Lee </span></p>
            </div>
        </div>
    )
};

export default Footer;