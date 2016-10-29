import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import ImageFlashOn from 'material-ui/svg-icons/image/flash-on';
import SocialGroup from 'material-ui/svg-icons/social/group';
import ActionSettings from 'material-ui/svg-icons/action/settings';

class Home extends Component {
  render() {
    let iconStyle = {
      color: '#795548',
      height: '40px',
      width: '40px'
    };
    return (
      <div className='home'>

        <div className='section company-info'>
          <div className='company-name'>{'Global Workforce Assessment'}</div>
          <div className='company-slogan'>{'Assessing workforce competencies. Anytime. Anywhere.'}</div>
          <div className='get-started'><FlatButton
            onClick={this.props.onPracticeClick}
            label='Practice Test'
            style={{backgroundColor: '#26a69a'}}
          /></div>
        </div>

        <div className='section company-topics'>
          <div className='topic-wrapper'>
            <div className='topic'>
              <div className='icon-wrapper'>
                <ImageFlashOn className='icon' style={iconStyle}/>
              </div>
              <div className='label'>{'Reliable'}</div>
              <div className='topic-msg'>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium egete'}</div>
            </div>
            <div className='topic'>
              <div className='icon-wrapper'>
                <SocialGroup className='icon' style={iconStyle}/>
              </div>
              <div className='label'>{'User Focused'}</div>
              <div className='topic-msg'>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie'}</div>
            </div>
            <div className='topic'>
              <div className='icon-wrapper'>
                <ActionSettings className='icon' style={iconStyle}/>
              </div>
              <div className='label'>{'Ease of Use'}</div>
              <div className='topic-msg'>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium egete'}</div>
            </div>
          </div>
        </div>

        <div className='section company-sub-info'>
          <div className='company-sub-slogan'>{'Put another slogan here. Preferably this long. Not too long, but not too short.'}</div>
        </div>
        
        <div className='section about-us'>
          <div className='about-us-wrapper'>
            <div className='label'>{'About Us'}</div>
            <div className='msg'>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae'}</div>
          </div>
        </div>
        
        <div className='section company-end-info'>
          <div className='company-third-slogan'>{'Put the 3rd slogan here. Preferably this long. Not too long, but not too short.'}</div>
        </div>
        
        <div className='section contact-us'>
          <div className='contact-us-wrapper'>
            <div className='contact-label'>{'Contact Us'}</div>
            <div className='contact-info'>
              <div className='contact-type'>
                <div className='label'>{'Inquiries:'}</div>
                <div className='value'>{'+63 929 345 3394'}</div>
              </div>
              <div className='contact-type'>
                <div className='label'>{'Technical Support:'}</div>
                <div className='value'>{'+63 405 332 9867'}</div>
              </div>
              <div className='contact-type'>
                <div className='label'>{'Email:'}</div>
                <div className='value'>{'support@gwa.com'}</div>
              </div>
              <div className='contact-type'>
                <div className='label address'>{'Address:'}</div>
                <div className='value address'>
                  <div className='address-field'>{'Global Workforce Assessment Inc.'}</div>
                  <div className='address-field'>{'673 Hanson Road'}</div>
                  <div className='address-field'>{'Angeles City, Philippines'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;