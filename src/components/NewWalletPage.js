import React, { Component } from "react";
import QRCode from "react-qr-code";
import btc from '../images/btc-logo.svg';
import {AiOutlineQrcode} from 'react-icons/ai';
import {FaBook} from 'react-icons/fa';



class NewWalletPage extends Component {
    render() {
        return (
            <div class='send'>

                <div class="btc-logo-container">
                    <img class='btc-logo' alt='nologo' src={btc} width="100%"/>
                </div>

                <p class="title-text">NEW WALLET</p>
                
                <div class="transactions-section">
                    <div class='transaction'>
                        
                    </div>
                </div>
              
              
            </div>
        )
    }
}

export default NewWalletPage;
