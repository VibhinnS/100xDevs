"use strict";
class Music {
    // Static method to initialize the static variables
    static initialize(Name, artist, free, thumbnail = "") {
        Music.Name = Name;
        Music.artist = artist;
        Music.thumbnail = thumbnail;
        Music.free = free;
    }
    // Static getter methods for accessing static properties
    static getName() {
        console.log(Music.Name);
    }
    static getArtist() {
        console.log(Music.artist);
    }
    static getThumbnail() {
        console.log(Music.thumbnail);
    }
    static getFree() {
        console.log(Music.free);
    }
    // Static setter methods to modify the static properties
    static setName(newName) {
        Music.Name = newName;
    }
    static setArtist(newArtist) {
        Music.artist = newArtist;
    }
    static setThumbnail(newThumbnail) {
        Music.thumbnail = newThumbnail;
    }
    static setFree(newPrice) {
        Music.free = newPrice;
    }
    // Static method to get all details using static methods
    static getDetails() {
        Music.getName(); // Calling static method
        Music.getArtist(); // Calling static method
        Music.getThumbnail(); // Calling static method
        Music.getFree(); // Calling static method
    }
}
// Example usage
Music.initialize("Song Title", "Artist Name", true, "thumbnail.jpg");
Music.getDetails();
