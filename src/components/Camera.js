import React, {Component} from 'react';
import ViewPhotos from './ViewPhotos';
import { CameraRoll, View, TouchableHighlight, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class Camera extends Component {

    state = {
        showPhotoGallery: false,
        photoArray: []
    };

    getPhotosFromGallery() {
        CameraRoll.getPhotos({ first: 100 })
            .then(res => {
                let photoArray = res.edges;
                this.setState({ showPhotoGallery: true, photoArray: photoArray })
            })
    }

    render() {
        if (this.state.showPhotoGallery) {
            return (
                <ViewPhotos
                    photoArray={this.state.photoArray}
                    selectedPhoto={(uri) => {
                        this.setState({showPhotoGallery: false});
                        this.props.selectedPhoto(uri)
                    }}
                />
            )
        }
        return (
            <View style={styles.container}>
                <TouchableHighlight>
                    <Button
                        onPress={() => this.getPhotosFromGallery()}
                        icon={{name: 'photo'}}
                        buttonStyle={this.props.buttonStyle}
                        title={this.props.title} />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: '#68c2ee'
    }
});

export default Camera;