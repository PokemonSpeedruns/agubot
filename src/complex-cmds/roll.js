function handler(separated_command, twitch_client, channel_name) {
  if (separated_command.length < 2) {
    twitch_client.say(
      channel_name,
      "The roll returned " + (Math.floor(Math.random() * 100) + 1) + "."
    );
    return;
  }
  let max = Number(separated_command[1]);

  if (!Number.isInteger(max) || max <= 0) {
    twitch_client.say(channel_name, "AngryVoHiYo");
    return;
  }

  twitch_client.say(
    channel_name,
    "The roll returned " + (Math.floor(Math.random() * max) + 1) + "."
  );
}

module.exports = { handler };
