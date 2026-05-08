import content from '../../samples/sample-telemetry.json' with { type: 'json' };
export function getFirstPlayableLevel(){return content.levels.find(l=>l.status==='playable');}
