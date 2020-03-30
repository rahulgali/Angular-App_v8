export class User {
    public name: string;
    public city: string;
    public country: string;
    public email?: string;

    constructor(name: string, city: string, country: string, email: string) {
        this.name = name;
        this.city = city;
        this.country = country;
        this.email = email;
    }
}
