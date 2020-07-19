class User {
  constructor(name, email, password, gender, birth, country, photo, admin) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._gender = gender;
    this._birth = birth;
    this._country = country;
    this._photo = photo;
    this._admin = admin;
    this._register = new Date();
  }

  get register() {
    return this._register;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get gender() {
    return this._gender;
  }

  get birth() {
    return this._birth;
  }

  get country() {
    return this._country;
  }

  get photo() {
    return this._photo;
  }

  get admin() {
    return this._admin;
  }

  set photo(value) {
    this._photo = value;
  }
}
