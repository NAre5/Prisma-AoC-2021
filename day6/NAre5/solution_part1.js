const fs = require('fs')
const path = require('path')


file_name = 'input.txt'
file_path = path.join(__dirname, file_name)

const raw_data = fs.readFileSync(file_path, 'utf8')

const fish_from_fish_after_phase_cache = {}

const fish_initial_timers = raw_data.trim().split(',');

const creator_fish_default_timer = 7;
const created_fish_default_timer = 9;

const fish_from_fish_after_phase = (phase_len) => {
    if (phase_len <= 0)
        return 1

    if (fish_from_fish_after_phase_cache[phase_len])
        return fish_from_fish_after_phase_cache[phase_len];

    const num_of_fish =
        fish_from_fish_after_phase(phase_len - creator_fish_default_timer)
        + fish_from_fish_after_phase(phase_len - created_fish_default_timer);

    fish_from_fish_after_phase_cache[phase_len] = num_of_fish;

    return num_of_fish;
}

const fish_from_all_fish_after_phase = ({ creation_phase }) => {
    let fish_after_creations = 0;

    fish_initial_timers.forEach(fish_internal_timer => {
        fish_after_creations += fish_from_fish_after_phase(creation_phase - fish_internal_timer)
    });

    return fish_after_creations;
}

if (require.main === module) {
    console.log(fish_from_all_fish_after_phase({ creation_phase: 80 }));
}

module.exports = {
    fish_from_all_fish_after_phase
}
