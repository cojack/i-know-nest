import {ConnectionOptions} from 'typeorm'

export interface Config {
	http?: any;
	database?: ConnectionOptions
}

export const def: Config = {
	http: {
		port: 8080,
		host: 'localhost'
	}
};