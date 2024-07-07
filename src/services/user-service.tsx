/*
 * -----------------------------------------------------------------------
 * File: frontend/user-service.tsx
 * Creation Time: Jul 6th 2024, 7:25 pm
 * Author: Saurabh Zinjad
 * Developer Email: saurabhzinjad@gmail.com
 * Copyright (c) 2023-2024 Saurabh Zinjad. All rights reserved | https://github.com/Ztrimus
 * -----------------------------------------------------------------------
 */
const DEFAULT_URL: string = 'https://raw.githubusercontent.com/Ztrimus/portfolio/main/data/user_profile.json'

export async function getUserData(url: string = DEFAULT_URL) {
    const response = await fetch(url);
    return response.json();
  }