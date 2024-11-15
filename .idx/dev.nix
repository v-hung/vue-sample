{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    "vue.volar"
    "esbenp.prettier-vscode"
    "bradlc.vscode-tailwindcss"
    "dbaeumer.vscode-eslint"
  ];
  # idx.previews = {
  #   previews = {
  #     web = {
  #       command = [
  #         "npm"
  #         "run"
  #         "dev"
  #         "--"
  #         "--port"
  #         "$PORT"
  #         "--host"
  #         "0.0.0.0"
  #       ];
  #       manager = "web";
  #     };
  #   };
  # };
}