export interface IMotorcycle {
	_id?: string;
	title: string,
	price: number,
	gear: string,
	mileage: number,
	engine: number,
	year: Date,
	manufacturer: string,
	imageURL: string
}

export interface IAppointment {
	_id?: string;
	datetime: Date,
	seller: string,
	buyer: string,
	status: string,
	location: string,
	motorcycle: IMotorcycle
}
