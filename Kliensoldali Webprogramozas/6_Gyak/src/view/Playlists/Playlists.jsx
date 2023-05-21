import cn from 'classnames'
import PlaylistList from './Components/PlaylistLists';
import Classics from './Components/Classics';
import TrackDetails from './Components/TrackDetails';

function Playlists() {


    return (
        <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
        <PlaylistList></PlaylistList>
        <Classics></Classics>
        </div>
        <div className="ui divider"></div>
        <TrackDetails></TrackDetails>
    </div>
    )
}

export default Playlists