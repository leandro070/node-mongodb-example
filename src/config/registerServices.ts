import { ContainerBuilder, YamlFileLoader } from "node-dependency-injection";

function RegisterService() {
    const container = new ContainerBuilder();
    const loader = new YamlFileLoader(container);
    loader.load(`${__dirname}/manifest-services.yaml`);

    return container;
}

export default RegisterService;