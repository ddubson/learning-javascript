import React from 'react';
import './App.css'
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import Profile from './Profile'
import Gallery from './Gallery'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            artist: null,
            tracks: []
        }
    }

    search() {
        console.log('this.state', this.state);
        const BASE_URL = "https://api.spotify.com/v1/search?";
        // ES6 Template strings
        let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        const ALBUM_URL = `https://api.spotify.com/v1/artists/`;

        console.log('fetch url', FETCH_URL);
        fetch(FETCH_URL, {
            method: "GET"
        })
            .then(response => response.json())
            .then(json => {
                const artist = json.artists.items[0];
                this.setState({artist});
                return `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
            })
            .then(topTracksUrl => {
                return fetch(topTracksUrl, {
                    method: 'GET'
                })
            })
            .then(res => res.json())
            .then(json => {
                console.log('artists top', json)
                // grab .tracks from json object
                const {tracks} = json;
                this.setState({tracks})
            });
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="search for an artist..."
                            value={this.state.query}
                            onChange={event => {
                                this.setState({query: event.target.value})
                            }}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search()
                                }
                            }}
                        />
                        <InputGroup.Addon
                            onClick={() => {
                                this.search()
                            }}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                {
                    this.state.artist !== null ?
                        <div>
                            <Profile
                                artist={this.state.artist}
                            />
                            <Gallery
                                tracks={this.state.tracks}
                            />
                        </div>
                        : <div></div>
                }
            </div>
        );
    }
}

export default App;