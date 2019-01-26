import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";
import './Footer.css';

const Footer = () => {
  return (
        <div>

        <footer class="flex-rw">

          <ul class="footer-list-top">
            <li>
              <h4 class="footer-list-header">About klavona</h4></li>
            <li><a href='/shop/about-mission' class="generic-anchor footer-list-anchor" itemprop="significantLink">GET TO KNOW US</a></li>
            <li><a href='/promos.html' class="generic-anchor footer-list-anchor" itemprop="significantLink"></a></li>
            <li><a href='/retailers/new-retailers.html' class="generic-anchor footer-list-anchor" itemprop="significantLink"></a></li>

            <li><a href='/job-openings.html' itemprop="significantLink" class="generic-anchor footer-list-anchor"></a></li>

            <li><a href='/shop/about-show-schedule' class="generic-anchor footer-list-anchor" itemprop="significantLink"></a></li>
          </ul>
          <ul class="footer-list-top">
            <li>
              <h4 class="footer-list-header">Sitemap</h4></li>


            <li><a href='/Angels/cat/id/70' class="generic-anchor footer-list-anchor">LANDING</a></li>
            <li><a href='/Home-Decor/cat/id/64' class="generic-anchor footer-list-anchor">ABOUT US</a></li>
            <li><a href='/Mugs/cat/id/32' class="generic-anchor footer-list-anchor">SHOP</a></li>
            <li><a href='/Pet-Lover/cat/id/108' class="generic-anchor footer-list-anchor"></a></li>
            <li><a href='/Ladies-Accessories/cat/id/117' class="generic-anchor footer-list-anchor" target="_blank"></a></li>
          </ul>
          <ul class="footer-list-top">
            <li id='help'>
              <h4 class="footer-list-header">Please Help Me</h4></li>
            <li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">CONTACT</a></li>
            <li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink"></a></li>
            <li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink"> </a></li>
            <li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink"> </a></li>
            <li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" class="generic-anchor footer-list-anchor"></a></li>
          </ul>
          <section class="footer-social-section flex-rw">
              <span class="footer-social-overlap footer-social-connect">
              CONNECT <span class="footer-social-small">with</span> US
              </span>
              <span class="footer-social-overlap footer-social-icons-wrapper">
              <a href="https://www.facebook.com" class="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><MDBIcon fab icon="facebook-f" /></a>
              <a href="https://twitter.com/" class="generic-anchor" target="_blank" title="Twitter" itemprop="significantLink"><MDBIcon fab icon="twitter" /></a>
              <a href="http://instagram.com" class="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><MDBIcon fab icon="instagram" /></a>
              <a href="https://plus.google.com" class="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><MDBIcon fab icon="google-plus" /></a>
              </span>
          </section>
          <section class="footer-bottom-section flex-rw">
        <div class="footer-bottom-wrapper">
        <i class="fa fa-copyright" role="copyright">

        </i> 2018 klavona <address class="footer-address" role="company address"></address><span class="footer-bottom-rights"></span>
            </div>
            <div class="footer-bottom-wrapper">
            <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow"></a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow"></a>
              </div>
          </section>
        </footer>
        </div>
  )
}

export default Footer;
