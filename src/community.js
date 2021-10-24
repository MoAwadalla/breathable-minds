import React, {useState, useEffect} from 'react';
import {Card, Button, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import thumbs from './thumb.png';
import redthumbs from './redThumb.png';
import bookmarks from './bookmark.png';
import colorBookmark from './colorBookmark.png';
import 'bootstrap/dist/css/bootstrap.css';
import voice from './voice.png'
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export function Community() {
  const [imgSource, changeImage] = useState(thumbs);
  const [imgSource2, changeBookmark] = useState(bookmarks);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const changeColor = () => {
    if (imgSource === thumbs) {
      changeImage(redthumbs);
    } else {
      changeImage(thumbs);
    }
  };
  const changeBookmarkColor = () => {
    if (imgSource2 === bookmarks) {
      changeBookmark(colorBookmark);
    } else {
      changeBookmark(bookmarks);
    }
  };

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:1234')
      .then((res) => res.json())
      .then((res) => {
        setComments(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const addComment = (comment) => {
    setLoading(false);
    setComments([comment, ...comments]);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{}}>Community Feed</h2>
        <Card

          style={{
            width: '45%',
            display: 'flex',
            borderRadius: 25,
            borderStyle: 'none',
            backgroundColor: '#CCFFD1',
            marginBottom: 15,
            justifyContent:'center'
          }}
        >
          <Card.Header
            style={{
              backgroundColor: '#5fc884',
              width: '100%',
              display: 'flex',
              borderRadius: 25,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              justifyContent:'center'
            }}
          >
            Anonymous Hippopotamus{' '}
          </Card.Header>
          <Card.Body>
            <Card.Title>Word Content</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
          </Card.Body>
          <Card.Body
            style={{
              backgroundColor: '#5fc884',
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
          >
            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '10%',
                padding:0
              }}
            >
              <Card.Body
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingLeft: 5,
                  }}
                >
                  <img src={imgSource} onClick={changeColor} />
                  <Card.Text>Like</Card.Text>
                </div>
              </Card.Body>
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img src={imgSource2} onClick={changeBookmarkColor} />
                  <Card.Text>Save</Card.Text>
                </div>
              </Card.Body>
            </Card.Body>

            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 0,
                justifyContent: 'center', paddingLeft: 8
              }}
            >
    

              <div className="col-4  pt-3 border-right">
                <CommentForm addComment={addComment} />
              </div>
              <div className="col-8  pt-3 bg-white" style={{display:'flex',justifyContent: 'center', width: '50%',borderRadius:15, marginLeft:8}}>
                <CommentList loading={loading} comments={comments} />
              </div>
            </Card.Body>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: '45%',
            display: 'flex',
            borderRadius: 25,
            borderStyle: 'none',
            backgroundColor: '#f5e8cd',
            marginBottom: 15,
            justifyContent:'center'
          }}
        >
          <Card.Header
            style={{
              backgroundColor: '#E5AF42',
              width: '100%',
              display: 'flex',
              borderRadius: 25,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              justifyContent:'center'
            }}
          >
            Anonymous Octopus{' '}
          </Card.Header>
          <Card.Body>
            <Card.Title>Word Content</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. 
            </Card.Text>
          </Card.Body>
          <Card.Body
            style={{
              backgroundColor: '#E5AF42',
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
          >
            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '10%',
                padding:0
              }}
            >
              <Card.Body
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingLeft: 5,
                  }}
                >
                  <img src={imgSource} onClick={changeColor} />
                  <Card.Text>Like</Card.Text>
                </div>
              </Card.Body>
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img src={imgSource2} onClick={changeBookmarkColor} />
                  <Card.Text>Save</Card.Text>
                </div>
              </Card.Body>
            </Card.Body>

            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 0,
                justifyContent: 'center', paddingLeft: 8
              }}
            >
    

              <div className="col-4  pt-3 border-right">
                <CommentForm addComment={addComment} />
              </div>
              <div className="col-8  pt-3 bg-white" style={{display:'flex',justifyContent: 'center', width: '50%',borderRadius:15, marginLeft:8}}>
                <CommentList loading={loading} comments={comments} />
              </div>
            </Card.Body>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: '45%',
            display: 'flex',
            borderRadius: 25,
            borderStyle: 'none',
            backgroundColor: '#dfd6ee',
            marginBottom: 15,
            justifyContent:'center'
          }}
        >
          <Card.Header
            style={{
              backgroundColor: '#8E6FCF',
              width: '100%',
              display: 'flex',
              borderRadius: 25,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              justifyContent:'center'
            }}
          >
            Anonymous Possum{' '}
          </Card.Header>
          <Card.Body>
            <Card.Title>Word Content</Card.Title>
            <Card.Text>
            My mental state for now, and how I make it. #MentalHealth
            </Card.Text>
            <Card.Img src={voice} style={{width:'50%'}}></Card.Img>
          </Card.Body>
          <Card.Body
            style={{
              backgroundColor: '#8E6FCF',
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
          >
            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '10%',
                padding:0
              }}
            >
              <Card.Body
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingLeft: 5,
                  }}
                >
                  <img src={imgSource} onClick={changeColor} />
                  <Card.Text>Like</Card.Text>
                </div>
              </Card.Body>
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img src={imgSource2} onClick={changeBookmarkColor} />
                  <Card.Text>Save</Card.Text>
                </div>
              </Card.Body>
            </Card.Body>

            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 0,
                justifyContent: 'center', paddingLeft: 8
              }}
            >
    

              <div className="col-4  pt-3 border-right">
                <CommentForm addComment={addComment} />
              </div>
              <div className="col-8  pt-3 bg-white" style={{display:'flex',justifyContent: 'center', width: '50%',borderRadius:15, marginLeft:8}}>
                <CommentList loading={loading} comments={comments} />
              </div>
            </Card.Body>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
