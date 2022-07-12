#include<bits/stdc++.h>
using namespace std;

#ifdef pankaj_adhana 
#include "library/debug.cpp"
#else
#define deb(...)
#endif

string product(string& x,string& y){
   int n = x.size();
   int m = y.size();

   string result(m+n,'0');

   reverse(x.begin(),x.end());
   reverse(y.begin(),y.end());


   for(int i=0;i<n;i++){
     for(int j=0;j<m;j++){
         int temp = ( result[i+j]-'0') + ( (x[i]-'0') * (y[j]-'0') );
         result[i+j] = '0' + temp%10;
         result[i+j+1] += temp/10;
     }
   }

   for(int i = n+m-1 ; i>0 and result[i]=='0';i--){
     result.pop_back();
   }
   reverse(result.begin(),result.end());
  return result;
}

void solve(){
  string x,y;
  cin>>x>>y;
  cout << product(x,y) << endl;
  return;
} 

signed main(){
  ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int T(1); 
    while(T--){ solve(); } 
    return 0;
}
