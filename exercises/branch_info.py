"""Печать веток учебного репозитория средствами стандартной библиотеки."""
from pathlib import Path
import subprocess

if __name__ == "__main__":
    subprocess.run(["git", "branch", "--all"], cwd=Path(__file__).resolve().parents[1], check=True)
