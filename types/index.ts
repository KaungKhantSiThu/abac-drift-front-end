export interface IMotorcycle {
	_id?: string;
	title: string,
	price: number,
	gear: string,
	mileage: number,
	engine: number,
	year: Date,
	manufacturer: string,
	imageURL: string,
	seller: string
}

export interface IAppointment {
	_id?: string;
	datetime: Date,
	seller: string,
	buyer: string,
	status: string,
	location: string,
	motorcycle: IMotorcycle,
	note: string
}

export interface IUser {
	_id?: string,
	username: string,
	email: string,
	bio: string,
	dob: string,
	type: string,
	phoneNumber: string,
	appointments?: [string],
}
