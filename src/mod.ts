import { DependencyContainer } from "tsyringe";

import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";

class Mod implements IPostSptLoadMod
{
    public postSptLoad(container: DependencyContainer): void
    {
        // get the logger from the server container
        const logger = container.resolve<ILogger>("WinstonLogger");

        logger.info("Realistic Thermal Scopes loaded");
    }
}

export const mod = new Mod();
