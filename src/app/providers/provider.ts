
export interface DialogData {
    providerName: String;
    phone: String;
    email: String;
    specialistClinic: SpecialistObject[];
    selectedSpecialist: any;
    clinicDaysAndTime: ClinicObject[];
}

export interface ClinicObject{
    day: string;
    time: string;
}

export interface Locations{
    address: string;
    city: string;
    state: string;
}

export interface SpecialistObject{
    specialistType: string;
    isInHouse: Boolean;
    onRequest: Boolean;
    clinicDaysAndTime: ClinicObject[];

}

export interface IProvider {
    providerName: string;
    category: string;
    coverageType: string;
    email: string;
    phone: string;
    location: {
        [key: string]: Locations
    };
    specialistClinic: SpecialistObject[];
}
