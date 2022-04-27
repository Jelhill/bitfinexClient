import { serviceLocator } from '../libs/serviceLocator';
import { createLogger, format, transports } from "winston";
import ClientController from '../controller';
import "winston-daily-rotate-file";


serviceLocator.register('logger', () => {
    const logger = createLogger({
        level: "info",
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        defaultMeta: { service: "assure-user-service" },
        transports: [
            new transports.File({ filename: "./logs/error.log", level: 'error' }),
            new transports.File({ filename: "./logs/info.log", level: 'info' })
        ]
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new transports.Console({
            format: format.simple(),
        }))
    }
    return logger
})



serviceLocator.register('clientController', (serviceLocator: any) => {
    const logger = serviceLocator.get('logger')
    return new ClientController(logger)
})

export const serviceLocate = serviceLocator