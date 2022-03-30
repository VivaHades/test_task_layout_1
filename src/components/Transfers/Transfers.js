import React from 'react'
import './Transfers.scss'
export default function Transfers() {
  return (
    <div className="transfers wrapper">
      <div className="to-next-step container">
        <div className="to-next-step__left">
          <h1 className="to-next-step__header">Domain Transfers</h1>
          <label className="to-next-step__label">It is time to move your domains to higher ground!</label>
          <p className="to-next-step__p1">
          To start your transfer, simply enter the list of domains.
          </p>
          <p className="to-next-step__p2">
            If you already have authorization codes from your old registrar,
            please include them. Otherwise, these can be added later. For help,
            contact our free transfer concierge.
          </p>
        </div>
        <div className="to-next-step__right">
          <form action="" className="to-next-step__form">
            <textarea 
            className="to-next-step__textarea" 
            name="" id="" cols="30" rows="10"
            placeholder='Paste your domains here, each on a separate line.
              If you have an authorization code, you can optionally include that as well.
              ExampleDomain.com AuthCode
              ExampleDomain2.net
              ExampleDomain3.net AuthCode'
            >
            </textarea>
            <button className="to-next-step__button">Next Step</button>
          </form>
        </div>
      </div>
      <div className="why-all-ca container-col">
        <h1 className='why-all-ca__header'>Why Transfer your Domains to All.Ca?</h1>
        <label htmlFor="" className="why-all-ca__label">A Platform That Helps You Build Your Business</label>
        
        <div className="why-all-ca__reasons">
          <div className="why-all-ca__reason">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5282 18.8899L3.51185 23.4414C2.37742 23.7637 2.2446 25.3184 3.30718 25.8286L7.31871 27.7549L2.92105 32.1525C2.01379 33.0598 2.01379 34.5303 2.92105 35.4368L4.56282 37.0786C5.01645 37.5322 5.61089 37.7587 6.20532 37.7587C6.79976 37.7587 7.39419 37.5322 7.84782 37.0786L12.2455 32.6809L14.1718 36.6925C14.4077 37.1831 14.8656 37.419 15.3229 37.419C15.8556 37.419 16.3855 37.0989 16.5597 36.4878L21.1119 20.4714C21.3856 19.5061 20.4928 18.6155 19.5282 18.8899ZM15.0754 33.2115L12.9198 28.7224L6.20532 35.4368L4.56355 33.795L11.278 27.0806L6.7896 24.9242L18.3662 21.6342L15.0754 33.2115ZM25.8065 20.0004C25.8065 16.7988 23.2015 14.1939 20 14.1939C17.5511 14.1939 15.4615 15.7232 14.6102 17.873C18.5535 16.7517 19.1777 16.5165 20 16.5165C21.9212 16.5165 23.4839 18.0792 23.4839 20.0004C23.4839 20.8176 23.2589 21.4113 22.1273 25.3902C24.2772 24.5388 25.8065 22.4492 25.8065 20.0004ZM20.2845 31.8753C26.729 31.72 31.9032 26.4811 31.9032 20.0004C31.9032 13.4209 26.5787 8.09714 20 8.09714C13.5178 8.09714 8.2804 13.2721 8.12508 19.7159L10.5166 19.0365C11.0087 14.2106 15.0471 10.4197 20 10.4197C25.2831 10.4197 29.5806 14.7172 29.5806 20.0004C29.5806 24.9525 25.789 28.9917 20.9646 29.4838L20.2845 31.8753ZM20 2.00037C10.0586 2.00037 2 10.059 2 20.0004C2 20.5302 2.03411 21.0521 2.07911 21.5703C2.33024 21.4273 2.58718 21.2894 2.87677 21.2074L4.3625 20.785C4.34944 20.5237 4.32258 20.2653 4.32258 20.0004C4.32258 11.356 11.3556 4.32295 20 4.32295C28.6444 4.32295 35.6774 11.356 35.6774 20.0004C35.6774 28.6447 28.6444 35.6778 20 35.6778C19.7351 35.6778 19.4767 35.6509 19.2154 35.6379L18.793 37.1229C18.7102 37.4146 18.5644 37.6672 18.4199 37.9198C18.9418 37.9655 19.4665 37.9996 20 37.9996C29.9414 37.9996 38 29.941 38 19.9996C38 10.0583 29.9414 2.00037 20 2.00037Z" fill="#CC0000"/>
            </svg>
            <label htmlFor="" className="why-all-ca__reason-label">Powerful Domain Management</label>
            <p className="why-all-ca__reason-text">
              Our tools for managing domains are among the most
              preferred in the industry. You can even manage your
              non-All.Ca domains for free and transfer them later.
            </p>
          </div>

          <div className="why-all-ca__reason">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5282 18.8899L3.51185 23.4414C2.37742 23.7637 2.2446 25.3184 3.30718 25.8286L7.31871 27.7549L2.92105 32.1525C2.01379 33.0598 2.01379 34.5303 2.92105 35.4368L4.56282 37.0786C5.01645 37.5322 5.61089 37.7587 6.20532 37.7587C6.79976 37.7587 7.39419 37.5322 7.84782 37.0786L12.2455 32.6809L14.1718 36.6925C14.4077 37.1831 14.8656 37.419 15.3229 37.419C15.8556 37.419 16.3855 37.0989 16.5597 36.4878L21.1119 20.4714C21.3856 19.5061 20.4928 18.6155 19.5282 18.8899ZM15.0754 33.2115L12.9198 28.7224L6.20532 35.4368L4.56355 33.795L11.278 27.0806L6.7896 24.9242L18.3662 21.6342L15.0754 33.2115ZM25.8065 20.0004C25.8065 16.7988 23.2015 14.1939 20 14.1939C17.5511 14.1939 15.4615 15.7232 14.6102 17.873C18.5535 16.7517 19.1777 16.5165 20 16.5165C21.9212 16.5165 23.4839 18.0792 23.4839 20.0004C23.4839 20.8176 23.2589 21.4113 22.1273 25.3902C24.2772 24.5388 25.8065 22.4492 25.8065 20.0004ZM20.2845 31.8753C26.729 31.72 31.9032 26.4811 31.9032 20.0004C31.9032 13.4209 26.5787 8.09714 20 8.09714C13.5178 8.09714 8.2804 13.2721 8.12508 19.7159L10.5166 19.0365C11.0087 14.2106 15.0471 10.4197 20 10.4197C25.2831 10.4197 29.5806 14.7172 29.5806 20.0004C29.5806 24.9525 25.789 28.9917 20.9646 29.4838L20.2845 31.8753ZM20 2.00037C10.0586 2.00037 2 10.059 2 20.0004C2 20.5302 2.03411 21.0521 2.07911 21.5703C2.33024 21.4273 2.58718 21.2894 2.87677 21.2074L4.3625 20.785C4.34944 20.5237 4.32258 20.2653 4.32258 20.0004C4.32258 11.356 11.3556 4.32295 20 4.32295C28.6444 4.32295 35.6774 11.356 35.6774 20.0004C35.6774 28.6447 28.6444 35.6778 20 35.6778C19.7351 35.6778 19.4767 35.6509 19.2154 35.6379L18.793 37.1229C18.7102 37.4146 18.5644 37.6672 18.4199 37.9198C18.9418 37.9655 19.4665 37.9996 20 37.9996C29.9414 37.9996 38 29.941 38 19.9996C38 10.0583 29.9414 2.00037 20 2.00037Z" fill="#CC0000"/>
            </svg>
            <label htmlFor="" className="why-all-ca__reason-label">Legendary Support </label>
            <p className="why-all-ca__reason-text">
              At All.CA we have long prided ourselves on providing
              great support. Your problem is our problem.
            </p>
          </div>

          <div className="why-all-ca__reason">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5282 18.8899L3.51185 23.4414C2.37742 23.7637 2.2446 25.3184 3.30718 25.8286L7.31871 27.7549L2.92105 32.1525C2.01379 33.0598 2.01379 34.5303 2.92105 35.4368L4.56282 37.0786C5.01645 37.5322 5.61089 37.7587 6.20532 37.7587C6.79976 37.7587 7.39419 37.5322 7.84782 37.0786L12.2455 32.6809L14.1718 36.6925C14.4077 37.1831 14.8656 37.419 15.3229 37.419C15.8556 37.419 16.3855 37.0989 16.5597 36.4878L21.1119 20.4714C21.3856 19.5061 20.4928 18.6155 19.5282 18.8899ZM15.0754 33.2115L12.9198 28.7224L6.20532 35.4368L4.56355 33.795L11.278 27.0806L6.7896 24.9242L18.3662 21.6342L15.0754 33.2115ZM25.8065 20.0004C25.8065 16.7988 23.2015 14.1939 20 14.1939C17.5511 14.1939 15.4615 15.7232 14.6102 17.873C18.5535 16.7517 19.1777 16.5165 20 16.5165C21.9212 16.5165 23.4839 18.0792 23.4839 20.0004C23.4839 20.8176 23.2589 21.4113 22.1273 25.3902C24.2772 24.5388 25.8065 22.4492 25.8065 20.0004ZM20.2845 31.8753C26.729 31.72 31.9032 26.4811 31.9032 20.0004C31.9032 13.4209 26.5787 8.09714 20 8.09714C13.5178 8.09714 8.2804 13.2721 8.12508 19.7159L10.5166 19.0365C11.0087 14.2106 15.0471 10.4197 20 10.4197C25.2831 10.4197 29.5806 14.7172 29.5806 20.0004C29.5806 24.9525 25.789 28.9917 20.9646 29.4838L20.2845 31.8753ZM20 2.00037C10.0586 2.00037 2 10.059 2 20.0004C2 20.5302 2.03411 21.0521 2.07911 21.5703C2.33024 21.4273 2.58718 21.2894 2.87677 21.2074L4.3625 20.785C4.34944 20.5237 4.32258 20.2653 4.32258 20.0004C4.32258 11.356 11.3556 4.32295 20 4.32295C28.6444 4.32295 35.6774 11.356 35.6774 20.0004C35.6774 28.6447 28.6444 35.6778 20 35.6778C19.7351 35.6778 19.4767 35.6509 19.2154 35.6379L18.793 37.1229C18.7102 37.4146 18.5644 37.6672 18.4199 37.9198C18.9418 37.9655 19.4665 37.9996 20 37.9996C29.9414 37.9996 38 29.941 38 19.9996C38 10.0583 29.9414 2.00037 20 2.00037Z" fill="#CC0000"/>
            </svg>
            <label htmlFor="" className="why-all-ca__reason-label">Competitive Pricing</label>
            <p className="why-all-ca__reason-text">
              All.CA is a full-service, all-inclusive registrar. We
              are always looking for more ways to provide great value
              to our customers.
            </p>
          </div>
        </div>
      </div>

      <div className="own-your-domain container-1440">
        <div className="container-with-bg-img padding">
          <div className="tranfers__left-col left-col">
            <span className='own-your-domain__header'>Own Your Domains Forever</span>
            <p className='own-your-domain__text'>
              Tired of annual renewals? Ever worry that you might have
              forgotten to renew an important domain? Save time, save
              money and skip the stress by registering your domains at
              All.Ca Forever.
            </p>

            <a href="" className="contact-us__link">
              <span className="contact-us__link-text">Contact Us For More Information</span>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.86871 5.26567L1.28121 9.89067C1.13433 10.0375 0.896831 10.0375 0.749956 9.89067L0.131206 9.27192C-0.0156692 9.12504 -0.0156692 8.88754 0.131206 8.74067L3.83433 5.00004L0.131206 1.25942C-0.0156692 1.11255 -0.0156692 0.875048 0.131206 0.728173L0.749956 0.109424C0.896831 -0.0374511 1.13433 -0.0374511 1.28121 0.109424L5.86871 4.73442C6.01558 4.88129 6.01558 5.11879 5.86871 5.26567Z" fill="#0088CC"/>
              </svg>
            </a>

          </div>
          <div className="right-col bg-img3"></div>
        </div>
      </div>


    </div>
  )
}
