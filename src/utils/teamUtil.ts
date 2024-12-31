const COLORS = [
  'blue',
  'purple',
  'cyan',
  'green',
  'magenta',
  'pink',
  'red',
  'orange',
  'yellow',
  'volcano',
  'geekblue',
  'lime',
  'gold',
  'blue-inverse',
  'purple-inverse',
  'cyan-inverse',
  'green-inverse',
  'magenta-inverse',
  'pink-inverse',
  'red-inverse',
  'orange-inverse',
  'yellow-inverse',
  'volcano-inverse',
  'geekblue-inverse',
  'lime-inverse',
  'gold-inverse',
]

const teamColors = new Map<string, string>()

export const getTeamColor = (team: string) => {
  if (!teamColors.has(team)) {
    const color = COLORS[teamColors.size % COLORS.length]
    teamColors.set(team, color)
  }
  return teamColors.get(team)
}
