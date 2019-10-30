import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post'

const PostForm = ({ addPost }) => {

  const [formData, setFormData] = useState({
    description: '',
    expiry: ''
  });

  const { description, expiry } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault()
    addPost(description, expiry)
  }

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1" onSubmit={e => onSubmit(e)}>
        <textarea
          name="description"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={description}
          onChange={e => onChange(e)}
          required
        ></textarea>
        <textarea
          name="expiry"
          cols="30"
          rows="5"
          placeholder="When is it expiring?"
          value={expiry}
          onChange={e => onChange(e)}
          required
        ></textarea>

        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  )
}

PostForm.propTypes = {

}

export default connect(null, { addPost })(PostForm)
