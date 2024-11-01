class Music {
    // Static variables that belong to the class, not instances
    private static Name: string;
    private static artist: string;
    private static thumbnail: string;
    private static free: boolean;

    // Static method to initialize the static variables
    static initialize(Name: string, artist: string, free: boolean, thumbnail: string = ""): void {
        Music.Name = Name;
        Music.artist = artist;
        Music.thumbnail = thumbnail;
        Music.free = free;
    }

    // Static getter methods for accessing static properties
    private static getName(): void {
        console.log(Music.Name);
    }

    public static getArtist(): void {
        console.log(Music.artist);
    }

    public static getThumbnail(): void {
        console.log(Music.thumbnail);
    }

    public static getFree(): void {
        console.log(Music.free);
    }

    // Static setter methods to modify the static properties
    public static setName(newName: string): void {
        Music.Name = newName;
    }

    public static setArtist(newArtist: string): void {
        Music.artist = newArtist;
    }

    public static setThumbnail(newThumbnail: string): void {
        Music.thumbnail = newThumbnail;
    }

    public static setFree(newPrice: boolean): void {
        Music.free = newPrice;
    }

    // Static method to get all details using static methods
    static getDetails(): void {
        Music.getName();  // Calling static method
        Music.getArtist(); // Calling static method
        Music.getThumbnail(); // Calling static method
        Music.getFree(); // Calling static method
    }
}

// Example usage
Music.initialize("Song Title", "Artist Name", true, "thumbnail.jpg");
Music.getDetails();
