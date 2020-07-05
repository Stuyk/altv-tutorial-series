/// <reference types="@altv/types-server" />
import alt from 'alt-server';
import chalk from 'chalk';

// Prototypes
import './prototypes/player';

// Systems
import './systems/chat';

// Utility
import './utility/array';
import './utility/vector';

alt.log(chalk.cyanBright('Resource has started.'));
