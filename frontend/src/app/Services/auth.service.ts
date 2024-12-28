// // auth.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import * as jwt from 'jwt-decode';
// import { Router } from '@angular/router';


// interface DecodedToken {
//   [key: string]: any;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private isAuthenticatedFlag: boolean = false;
//   private tokenKey = 'authToken';

//   constructor(private http: HttpClient, private router: Router) {
//     const token = localStorage.getItem(this.tokenKey);
//     if (token) {
//       this.setAuthenticationStatus(true);
//     }
//   }

//   login(username: string, password: string): Observable<any> {
//     return this.http.post('http://127.0.0.1:5001/api/user/login', { username, password });
//   }

//   decodeToken(token: string): DecodedToken {
//     try {
//       const decodedToken = jwt.jwtDecode(token) as DecodedToken;
//       this.setAuthenticationStatus(true); // Set authentication status to true after successful decoding
//       localStorage.setItem(this.tokenKey, token); // Store token in local storage
//       return decodedToken;
//     } catch (error) {
//       console.error('Error decoding token', error);
//       this.setAuthenticationStatus(false);
//       localStorage.removeItem("authToken");
//       this.router.navigate(['/login']); 
//       return {};
//     }
//   }

//   setAuthenticationStatus(isAuthenticated: boolean): void {
//     this.isAuthenticatedFlag = isAuthenticated;
//   }

//   isAuthenticated(): boolean {
//     return this.isAuthenticatedFlag;
//   }

//   logout(): void {
//     localStorage.removeItem("authToken"); 
//     this.router.navigate(['/login']);
//   }
// }

// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as jwt from 'jwt-decode';
import { Router } from '@angular/router';

interface DecodedToken {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedFlag: boolean = false;
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      this.setAuthenticationStatus(true);
    }
  }

  login(username: string, password: string): Observable<any> {
    // Bypass the API call and simulate successful login
    const mockToken = this.generateMockToken(username);
    this.decodeToken(mockToken);
    return of({ success: true, token: mockToken });
  }

  generateMockToken(username: string): string {
    // Simulate a JWT payload
    const payload = {
      username,
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expires in 1 hour
    };
    // Convert payload to Base64 (mocking the JWT)
    const base64Payload = btoa(JSON.stringify(payload));
    return `mockHeader.${base64Payload}.mockSignature`;
  }

  decodeToken(token: string): DecodedToken {
    try {
      const decodedToken = jwt.jwtDecode(token) as DecodedToken;
      this.setAuthenticationStatus(true); // Set authentication status to true after successful decoding
      localStorage.setItem(this.tokenKey, token); // Store token in local storage
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token', error);
      this.setAuthenticationStatus(false);
      localStorage.removeItem(this.tokenKey);
      this.router.navigate(['/login']);
      return {};
    }
  }

  setAuthenticationStatus(isAuthenticated: boolean): void {
    this.isAuthenticatedFlag = isAuthenticated;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
