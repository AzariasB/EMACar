export const serverPort = 4300;
export const secret = 'RbBQqA6uF#msRF8s7h*?@=95HUm&DgMDd6zLFn4XzWQ6dtwXSJwBX#?gL2JWf!';
export const length = 128;
export const digest = 'sha256';
export const database: any = {
    driver: {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "azarias",
        password: "root",
        database: "emacar"
    },
    entities: [
        __dirname + '/entity/*.js'
    ],
    autoSchemaSync: true
};