import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Card from './components/container/Card/Card'
import { PostInterface } from './utils/interfaces/post';
import CardPresentational from './components/presentational/Card/CardPresentational';
import { UserContext } from './utils/hooks/UserContext';

test('Render content', () => {
  const post: PostInterface = {
    id: 1,
    title: "Lorem ipsum",
    userId: 1,
    body: "This is the body"
  }

  const component = render(<Card post={post} />);

  component.getByText('Lorem ipsum')

})

test('Check that user can delete a post', () => {

  const post: PostInterface = {
    id: 1,
    title: "Lorem ipsum",
    userId: 1,
    body: "This is the body"
  }

  const userContextValues = {
    user: {
      id: 1,
      username: "Guuri11",
      email: "sergio@bloggerpy.com",
      name: "Sergio"
    },
    setUser: () => { }
  }

  const mockHandler = jest.fn()

  const component = render(
    <UserContext.Provider value={userContextValues}>
      <CardPresentational post={post} handleDelete={mockHandler} />
    </UserContext.Provider>
  );

  expect(post.userId).toEqual(userContextValues.user.id)

  component.getByText('Delete')


})

test('Delete action of a Post', () => {

  const post: PostInterface = {
    id: 1,
    title: "Lorem ipsum",
    userId: 1,
    body: "This is the body"
  }

  const userContextValues = {
    user: {
      id: 1,
      username: "Guuri11",
      email: "sergio@bloggerpy.com",
      name: "Sergio"
    },
    setUser: () => { }
  }

  const mockHandler = jest.fn()

  const component = render(
    <UserContext.Provider value={userContextValues}>
      <CardPresentational post={post} handleDelete={mockHandler} />
    </UserContext.Provider>
  );

  const button = component.getByText('Delete');

  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)

})