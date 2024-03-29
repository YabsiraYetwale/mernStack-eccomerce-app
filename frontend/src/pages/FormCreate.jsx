import React, { useState } from 'react';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../actions/product';
import { Box} from '@mui/material';
import {
  FormContainer,
  FormWrapper,
  Form,
  Title,
  InputField,
  SelectWrapper,
  PriceInput,
  CategorySelect,
  UploadWrapper,
  UploadLabel,
  SubmitButton,
} from './styles/Form.styles';

const FormCreate = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const user = JSON.parse(localStorage.getItem('user-auth'));

  let [formData, setFormData] = useState({
    image:'',
    title: '',
    description: '',
    category: '',
    oldPrice:0,
    newPrice:0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(formData, history));
  };

  return (
    <>
      <FormContainer>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <Title variant="h4">Create Product</Title>
            <InputField
              required
              variant="outlined"
              type="text"
              label="Property Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
  
            <InputField
              required
              variant="outlined"
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
  
            <SelectWrapper>
              <PriceInput
                required
                variant="outlined"
                type="number"
                label="Price"
                name="oldPrice"
                value={formData.oldPrice}
                onChange={(e) => setFormData({ ...formData, oldPrice: e.target.value })}
              />
  
              <PriceInput
                required
                variant="outlined"
                type="number"
                label="Offer Price"
                value={formData.newPrice}
                onChange={(e) => setFormData({ ...formData, newPrice: e.target.value })}
              />
            </SelectWrapper>
  
            <CategorySelect
              style={{ height: '30px' }}
              name="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">----choose----</option>
              <option value="men">men</option>
              <option value="women">women</option>
              <option value="kids">kids</option>
            </CategorySelect>
  
            <UploadWrapper>
              <UploadLabel htmlFor="file">
                <Box sx={{ color: '#3e8499', fontWeight: 'bold', cursor: 'pointer' }}>upload*</Box>
              </UploadLabel>
              <FileBase type='file' onDone={({base64})=> setFormData({...formData, image:base64})} />
            </UploadWrapper>
  
            <SubmitButton variant="contained" size="large" type="submit">
              Create
            </SubmitButton>
          </Form>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default FormCreate;