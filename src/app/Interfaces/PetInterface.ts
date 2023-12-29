interface Pet{
    // Define the shape of the pet object
    // For example:
    id: number;
    name: string;
    species: string;
    age: string;
    breed: string;
    shelterLocation: string;
    houseTrained: boolean;
    vaccinated: boolean;
    spayed: boolean;
    neutering: boolean;
    description: string;
    image: string;
    // Add a property to the interface to indicate whether the pet is in the user's favorites list
    isFavorite: boolean;
}