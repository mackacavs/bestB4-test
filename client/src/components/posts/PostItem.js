import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { moment } from 'react-moment';
import { connect } from 'react-redux';

const PostItem = ({ auth, post: { _id, description, avatar, name, user, expiry } }) =>
  <div className="post bg-white p-1 my-1">
    <div>
      <h4>{name}</h4>
      <img
        className="round-img"
        src={avatar}
        alt="" />
    </div>
    <div>
      <p className="my-1">
        Description: {description}
      </p>
      <p className="post-date">
        Expiry Date: {expiry}
      </p>
    </div>
  </div>

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(PostItem)
