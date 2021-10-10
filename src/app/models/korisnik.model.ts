export class Korisnik{
    constructor(
        public korisnikID: number,
        public ime: string,
        public prezime: string,
        public email: string,
        public sifra: string,
        public roleID:number
    ){}
}